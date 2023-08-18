import { Link } from "preact-router/match";
import { NavBar } from "./styles";
import { useEffect, useState } from "preact/hooks";

export function Header() {
  const [navigation, setNavigation] = useState(null);

  useEffect(() => {
    (async () => {
      const req = await fetch(`${import.meta.env.BASE_URL}/navigation.json`);
      const data = await req.json();
      setNavigation(data);
    })();
  }, []);

  return (
    <NavBar>
      <nav>
        <ul role="list">
          {navigation?.paths.map((navItem, index) => (
            <li>
              <Link key={index} class="parent" href={`/basededados${navItem.path}`}>
                {navItem.name}
              </Link>

              {navItem.children && (
                <ol>
                  {navItem.children?.map((child, childIndex) => (
                    <li>
                      <Link
                        key={`${index}-${childIndex}`}
                        href={`/basededados${navItem.path}${child.path}`}
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </NavBar>
  );
}
