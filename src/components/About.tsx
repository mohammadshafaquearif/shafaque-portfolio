import { Flame, Rocket, Target, Zap } from 'lucide-react';
import { profile } from '../data/profile';
import { TechIconRow } from './TechIcon';
import HoloPanel from './motion/HoloPanel';
import { SectionTitle } from './motion/Reveal3D';

const highlights = [
  { icon: Rocket, title: 'Building Daily', desc: 'Shipping production code at ECT Cloud Solutions' },
  { icon: Zap, title: 'DevOps Obsessed', desc: 'Oracle DevOps Pro · 48 certs · CI/CD pipelines' },
  { icon: Target, title: 'SIH Finalist', desc: 'Smart India Hackathon · B.Tech CS @ LPU' },
  { icon: Flame, title: 'The Grind', desc: 'Employee of the Month · Edureka · Full Stack lead' },
];

export default function About() {
  return (
    <section id="about" className="scene-3d section-padding relative z-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          badge="My Story"
          from="up"
          title={
            <>
              The Grind Behind <span className="gradient-fire">the Code</span>
            </>
          }
        />

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <HoloPanel from="left" className="space-y-6 p-6 lg:p-8">
            {profile.about.map((para, i) => (
              <p
                key={i}
                className={`leading-relaxed ${i === 0 ? 'text-base text-text' : 'text-muted'}`}
              >
                {para}
              </p>
            ))}

            <div className="flex flex-wrap gap-2 border-t border-cyan/10 pt-6">
              {profile.achievements.map((item) => (
                <span key={item} className="holo-badge !text-[9px] !tracking-wider">
                  {item}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan/70">
                // Stack I Live In
              </p>
              <TechIconRow tools={profile.stackTools} size="lg" gap="gap-4" />
            </div>
          </HoloPanel>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <HoloPanel
                key={item.title}
                from={i % 2 === 0 ? 'right' : 'left'}
                delay={i * 0.1}
                className="p-5"
              >
                <item.icon className="mb-3 h-5 w-5 text-cyan" />
                <h3 className="font-display text-sm font-bold text-text">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{item.desc}</p>
              </HoloPanel>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
