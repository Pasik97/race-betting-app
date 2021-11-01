import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as P from './parts';
import { setRaceBetAmount } from 'store/races/actions';
import { doubleNumberRegex } from 'utils/validators';
import ApplicationState from 'store/ApplicationState';
import { getRaceBetAmount } from 'store/races/selectors';

interface BetAmountProps {
   raceId: string;
}

const BetAmount: React.FC<BetAmountProps> = (({ raceId }) => {
   const dispatch = useDispatch();

   const raceBetAmount = useSelector((state: ApplicationState) => getRaceBetAmount(state, raceId));

   const [amount, setAmount] = useState<string>(raceBetAmount?.toString() || '0');

   const setBetAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
      const isNumberValid = doubleNumberRegex.test(event.target.value);
      const decimals = event.target.value.split('.')[1];
      const areDecimalsValid = !decimals || decimals.length <= 2;

      if (!event.target.value.length || (isNumberValid && areDecimalsValid)) {
         setAmount(event.target.value);

         const newAmount = Number(event.target.value) || 0;

         dispatch(setRaceBetAmount(raceId, newAmount));
      }
   }

   return (
      <P.InputWrapper>
         <P.Label>Bet amount: </P.Label>
         <P.Input name="betAmount" value={amount} onChange={setBetAmount} />
      </P.InputWrapper>
   )
});

export default BetAmount;
