export const Header = () => {
  const handleReportClick = () => {
    alert("Funcionalidade de gerar relatório a ser implementada!");
  };

  return (
    <header>
      <h1 className="gradient-text">TaskFlow</h1>
      <button className="report-button" onClick={handleReportClick}>
        Relatório
      </button>
    </header>
  );
};
