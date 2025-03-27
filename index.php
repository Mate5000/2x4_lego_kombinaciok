<?php
function lehetosegekSzamitasa($n) {
    if ($n <= 0) {
        return 0;
    }
    if ($n == 1) {
        return 1;
    }
    return ((pow(46, ($n-1)) - pow(2, ($n-1)))/2) + pow(2, ($n-1));
}

function tablazatGeneralas($maxN) {
    $tablazat = [];
    $osszLehetoseg = 0;
    
    for ($i = 1; $i <= $maxN; $i++) {
        $lehetosegek = lehetosegekSzamitasa($i);
        $osszLehetoseg += $lehetosegek;
        $tablazat[] = [
            'n' => $i,
            'lehetosegek' => number_format($lehetosegek),
            'ossz_lehetosegek' => number_format($osszLehetoseg)
        ];
    }
    
    return $tablazat;
}

$epitoelemekSzama = isset($_POST['epitoelemekSzama']) ? intval($_POST['epitoelemekSzama']) : 0;
$tablazat = [];

if ($epitoelemekSzama > 0) {
    $tablazat = tablazatGeneralas($epitoelemekSzama);
}
?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2x8 LEGO kombináció kalkulátor</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/background-blocks.css">
</head>
<body>
    <div class="animated-background" id="animatedBackground"></div>
    <div class="header">
        <p>készítette: máté</p>
        <a href="https://github.com/mate" class="github-link" target="_blank" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="github-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
    </div>
    <div class="app-container">
        <div class="calculator-card">
            <div class="glow-effect"></div>
            <div class="content">
                <h1 class="title">2x8 LEGO kombináció kalkulátor</h1>
                <p class="description">A programom segít kiszámolni, hogy <i>n</i> darab 2x8-as LEGO elemet hányféleképpen lehet egymásra helyezni.</p>
                
                <form method="POST" class="input-form" id="calculatorForm">
                    <div class="form-group">
                        <label for="epitoelemekSzama" class="form-label">LEGO elemek száma:</label>
                        <div class="input-wrapper">
                            <input 
                                type="number" 
                                id="epitoelemekSzama" 
                                name="epitoelemekSzama" 
                                min="1" 
                                max="20" 
                                value="<?php echo $epitoelemekSzama; ?>" 
                                class="form-input"
                                required
                            >
                            <button type="submit" class="submit-btn">Számítás</button>
                        </div>
                    </div>
                </form>
                
                <?php if (!empty($tablazat)): ?>
                <div class="results-container">
                    <h2 class="results-title">Eredmények</h2>
                    <div class="table-container">
                        <table class="results-table">
                            <thead>
                                <tr>
                                    <th>Elemek (n)</th>
                                    <th>Kombinációk</th>
                                    <th>Összes kombináció</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php foreach ($tablazat as $sor): ?>
                                <tr class="table-row">
                                    <td><?php echo $sor['n']; ?></td>
                                    <td><?php echo $sor['lehetosegek']; ?></td>
                                    <td><?php echo $sor['ossz_lehetosegek']; ?></td>
                                </tr>
                                <?php endforeach; ?>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="info-text">
                        <p>Használt képlet: ((46<sup>n-1</sup> - 2<sup>n-1</sup>)/2) + 2<sup>n-1</sup></p>
                    </div>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
    

    <script src="js/script.js"></script>
</body>
</html>
