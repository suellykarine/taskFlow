interface HeaderProps {
  onGenerateReport: () => void;
}

export const Header = ({ onGenerateReport }: HeaderProps) => {
  return (
    <header>
      <h1 className="gradient-text">TaskFlow</h1>
      <button className="report-button" onClick={onGenerateReport}>
        Relatório
      </button>
    </header>
  );
};
