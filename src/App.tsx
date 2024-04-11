import { DangerButton, InfoButton, PrimaryButton, SecondaryButton, SuccessButton, WarningButton, LightButton, CustomButton } from './components/button/colorifiedButtons/colorifiedButtons';

const App = () => {
  return (
    <div className='container mx-auto p-4 space-y-2'>
      <div className='grid grid-cols-1 w-48 '>
        <h1>Custom Buttons</h1>
        <PrimaryButton onClick={() => console.log('Primary clicked')}>Primary Button</PrimaryButton>
        <SecondaryButton onClick={() => console.log('Secondary clicked')}>Secondary Button</SecondaryButton>
        <SuccessButton onClick={() => console.log('Success clicked')}>Success Button</SuccessButton>
        <DangerButton onClick={() => console.log('Danger clicked')}>Danger Button</DangerButton>
        <InfoButton onClick={() => console.log('Info clicked')}>Info Button</InfoButton>
        <WarningButton onClick={() => console.log('Warning clicked')}>Warning Button</WarningButton>
        <LightButton onClick={() => console.log('Light clicked')}>Light Button</LightButton>
        <CustomButton
          customColorClasses="bg-purple-500 hover:bg-purple-700 text-white"
          onClick={() => console.log('Custom clicked')} variant={'primary'}>
          Custom Button
        </CustomButton>
      </div>

    </div>
  )
}

export default App;
