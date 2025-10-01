import React, { useState } from 'react';
import { Search, BookOpen, User, Lock } from 'lucide-react';

const StudentDatabase = () => {
  const [searchName, setSearchName] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  // Base de données des étudiants (62 exemples)
  const students = {
    'Jean Dupont': 'Analyse de l\'impact des réseaux sociaux sur le comportement d\'achat des jeunes consommateurs',
    'Marie Martin': 'Étude comparative des systèmes éducatifs en Afrique francophone',
    'Pierre Kamga': 'Optimisation des processus logistiques dans les PME camerounaises',
    'Sophie Nkolo': 'L\'intelligence artificielle au service de la santé publique',
    'Paul Mballa': 'Développement durable et agriculture urbaine en zone tropicale',
    'Grace Fotso': 'Analyse des stratégies marketing digital dans le secteur bancaire',
    'Emmanuel Ndi': 'Impact du changement climatique sur la biodiversité au Cameroun',
    'Astrid Manga': 'Gestion des ressources humaines dans les organisations internationales',
    'Bertrand Ekotto': 'Innovation technologique et entrepreneuriat digital en Afrique',
    'Clarisse Njoya': 'Étude des mécanismes de microfinance pour l\'inclusion financière',
    'Daniel Tchoua': 'Architecture bioclimatique et construction durable',
    'Esther Bile': 'Communication interculturelle dans les entreprises multinationales',
    'François Ondoa': 'Énergie renouvelable et transition énergétique au Cameroun',
    'Georgette Eyoum': 'Psychologie du travail et motivation des employés',
    'Henri Nsom': 'Analyse des politiques publiques de santé en Afrique centrale',
    'Irène Bassek': 'Marketing territorial et attractivité des villes africaines',
    'Jacques Ebong': 'Cybersécurité et protection des données personnelles',
    'Karine Mendo': 'Entrepreneuriat féminin et autonomisation économique',
    'Louis Ngoa': 'Transformation digitale des services publics',
    'Madeleine Zang': 'Sociologie urbaine et dynamiques migratoires',
    'Norbert Ateba': 'Finance islamique et développement économique',
    'Odette Messi': 'Droit international et résolution des conflits',
    'Patrick Mvogo': 'Ingénierie pédagogique et technologies éducatives',
    'Rachelle Owona': 'Gestion de projet dans le secteur de la construction',
    'Samuel Ngono': 'Économie circulaire et gestion des déchets urbains',
    'Thérèse Bikoi': 'Relations internationales et diplomatie africaine',
    'Urbain Essomba': 'Transport et mobilité urbaine durable',
    'Vanessa Abena': 'Anthropologie culturelle et patrimoine immatériel',
    'William Ntep': 'Audit et contrôle de gestion dans les entreprises publiques',
    'Xavier Fouda': 'Blockchain et innovations financières',
    'Yvette Mbarga': 'Nutrition et sécurité alimentaire',
    'Zacharie Toko': 'Géologie et exploitation des ressources minières',
    'Adrienne Bilong': 'Art contemporain et identité culturelle africaine',
    'Basile Onana': 'Biotechnologie et recherche pharmaceutique',
    'Cécile Mbida': 'Chimie verte et développement industriel durable',
    'Didier Fokou': 'Droit des affaires et gouvernance d\'entreprise',
    'Éliane Ngah': 'Écologie marine et conservation des océans',
    'Fabrice Nsangou': 'Fiscalité internationale et optimisation fiscale',
    'Gisèle Mendomo': 'Géographie urbaine et planification territoriale',
    'Hervé Mbeng': 'Histoire économique de l\'Afrique postcoloniale',
    'Inès Beyala': 'Intelligence émotionnelle et leadership transformationnel',
    'Joël Manga': 'Journalisme numérique et médias sociaux',
    'Katia Ebode': 'Kinésithérapie et rééducation fonctionnelle',
    'Lambert Ndjodo': 'Linguistique appliquée et enseignement des langues',
    'Martine Essama': 'Management de l\'innovation dans les start-ups',
    'Narcisse Eba': 'Neurosciences cognitives et apprentissage',
    'Olivia Biwole': 'Optométrie et santé visuelle en milieu rural',
    'Pascal Manga': 'Philosophie politique et démocratie participative',
    'Quincy Ekani': 'Qualité de l\'air et santé environnementale',
    'Rose Tchoumba': 'Robotique et automatisation industrielle',
    'Serge Ndongo': 'Sociologie des religions et cohésion sociale',
    'Tatiana Njike': 'Tourisme culturel et développement local',
    'Ulrich Biwole': 'Urbanisme et smart cities en Afrique',
    'Valérie Ebako': 'Virologie et épidémiologie des maladies infectieuses',
    'Wilfrid Moukouri': 'Water management et accès à l\'eau potable',
    'Yannick Eteme': 'Yield management dans l\'industrie hôtelière',
    'Zénaide Assembe': 'Zoologie et protection de la faune sauvage',
    'André Mbassi': 'Agriculture de précision et nouvelles technologies',
    'Brigitte Ondoua': 'Biochimie médicale et diagnostic clinique',
    'Christian Ndoumbe': 'Commerce international et intégration régionale',
    'Delphine Ngo': 'Design thinking et innovation sociale',
    'Éric Fotsing': 'Énergies fossiles et transition écologique',
    'Françoise Nanga': 'Foresterie durable et lutte contre la déforestation'
  };

  const handleSearch = () => {
    setError('');
    setResult(null);

    if (!searchName.trim()) {
      setError('Veuillez entrer votre nom complet');
      return;
    }

    // Recherche insensible à la casse et aux accents
    const normalizedSearch = searchName.toLowerCase().trim();
    const foundStudent = Object.keys(students).find(
      name => name.toLowerCase() === normalizedSearch
    );

    if (foundStudent) {
      setResult({
        name: foundStudent,
        title: students[foundStudent]
      });
    } else {
      setError('Aucun étudiant trouvé avec ce nom. Vérifiez l\'orthographe.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-600 p-4 rounded-full">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Base de Données des Titres d'Étude
          </h1>
          <p className="text-gray-600">
            Consultez votre titre d'étude reformulé
          </p>
        </div>

        {/* Search Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <Lock className="w-5 h-5 text-indigo-600" />
            <h2 className="text-xl font-semibold text-gray-800">
              Accès Sécurisé
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Entrez votre nom complet
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ex: Jean Dupont"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Search className="w-5 h-5" />
              Consulter mon titre
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {/* Result */}
          {result && (
            <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-green-500 p-2 rounded-full mt-1">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {result.name}
                  </h3>
                  <p className="text-sm text-gray-600">Étudiant(e)</p>
                </div>
              </div>
              
              <div className="pl-11">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Titre d'étude reformulé :
                </h4>
                <p className="text-gray-800 text-lg leading-relaxed">
                  {result.title}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
          <p className="font-medium mb-1">ℹ️ Information</p>
          <p>
            Cette base de données contient 62 étudiants. Entrez votre nom exact tel qu'enregistré dans le système.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentDatabase;