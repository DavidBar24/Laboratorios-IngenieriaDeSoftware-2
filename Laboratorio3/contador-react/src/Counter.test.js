import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Contador Component', () => {
  test('Pulsación del botón +1', async () => {
    render(<Counter />);
    const buttonPlus = screen.getByText('+1');
    const displayInitial = screen.getByText('0');

    await userEvent.click(buttonPlus);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('Pulsación del botón -1', async () => {
    render(<Counter />);
    const buttonMinus = screen.getByText('−1');

    await userEvent.click(buttonMinus);

    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  test('Pulsación del botón Restablecer', async () => {
    render(<Counter />);
    const buttonPlus = screen.getByText('+1');
    const buttonReset = screen.getByText('Restablecer');

    await userEvent.click(buttonPlus);
    expect(screen.getByText('1')).toBeInTheDocument();

    await userEvent.click(buttonReset);

    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('Pulsación del botón Aplicar (suma)', async () => {
    render(<Counter />);
    const input = screen.getByPlaceholderText('Ingresa un valor (+ o −)');
    const buttonApply = screen.getByText('Aplicar');

    await userEvent.clear(input);
    await userEvent.type(input, '5');

    await userEvent.click(buttonApply);

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('Pulsación del botón Aplicar (resta)', async () => {
    render(<Counter />);
    const input = screen.getByPlaceholderText('Ingresa un valor (+ o −)');
    const buttonApply = screen.getByText('Aplicar');

    await userEvent.clear(input);
    await userEvent.type(input, '-3');

    await userEvent.click(buttonApply);

    expect(screen.getByText('-3')).toBeInTheDocument();
  });

  test('Digitación de número en el placeholder', async () => {
    render(<Counter />);
    const input = screen.getByPlaceholderText('Ingresa un valor (+ o −)');
    const buttonApply = screen.getByText('Aplicar');
    const buttonPlus = screen.getByText('+1');
    const buttonMinus = screen.getByText('−1');

    await userEvent.clear(input);
    await userEvent.type(input, '10');
    await userEvent.click(buttonApply);
    expect(screen.getByText('10')).toBeInTheDocument();

    await userEvent.clear(input);
    await userEvent.type(input, '-4');
    await userEvent.click(buttonApply);
    expect(screen.getByText('6')).toBeInTheDocument();

    await userEvent.click(buttonPlus);
    expect(screen.getByText('7')).toBeInTheDocument();

    await userEvent.click(buttonMinus);
    expect(screen.getByText('6')).toBeInTheDocument();
  });
});