import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-tsnode",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevTsnode {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-tsnode-3-a)"}],["path",{"fill":"currentColor","d":"m92.2 190.3-87 50.1a11 11 0 0 0-5.2 9.1V350c0 3.8 2 7.3 5.2 9.1l87 50.2c3.2 2 7.2 2 10.5 0l86.9-50.2c3.2-1.8 5.2-5.3 5.2-9V249.4c0-3.7-2-7.2-5.2-9l-87-50.2a11 11 0 0 0-10.4 0"}],["path",{"fill":"currentColor","d":"m92.2 190.8-87 50.1A11 11 0 0 0 0 250v100.4c0 3.8 2 7.2 5.2 9.1l87 50.2c3.2 1.9 7.2 1.9 10.5 0l86.9-50.2c3.2-1.9 5.2-5.3 5.2-9V250c0-3.7-2-7.2-5.2-9l-87-50.2a11 11 0 0 0-10.4 0"}],["g",{"mask":"url(#devicon-tsnode-4-b)"}],["path",{"fill":"currentColor","d":"M58.7 403.4h20.5V322h28.3v-18H30.4v18h28.3z"}],["path",{"fill":"currentColor","d":"m92.2 190.8-87 50.1A11 11 0 0 0 0 250v100.4c0 3.8 2 7.2 5.2 9.1l87 50.2c3.2 1.9 7.2 1.9 10.5 0l86.9-50.2c3.2-1.9 5.2-5.3 5.2-9V250c0-3.7-2-7.2-5.2-9l-87-50.2a11 11 0 0 0-10.4 0"}],["g",{"mask":"url(#devicon-tsnode-5-c)"}],["path",{"fill":"currentColor","d":"M150.3 404.7c19.4 0 33.8-10 33.8-28.5 0-17-9.8-24.6-27.1-32l-5.1-2.3c-8.8-3.8-12.6-6.3-12.6-12.4 0-5 3.8-8.7 9.8-8.7 5.8 0 9.6 2.4 13.1 8.7l16-10.2c-6.8-11.8-16.1-16.4-29.1-16.4-18.3 0-30 11.7-30 27 0 16.7 9.8 24.6 24.6 30.9l5.1 2.1c9.3 4.1 14.9 6.6 14.9 13.6 0 5.9-5.4 10.1-13.9 10.1-10 0-15.7-5.3-20.1-12.4l-16.7 9.6c6 11.8 18.3 20.9 37.3 20.9"}],["path",{"fill":"currentColor","d":"M303.2 335.4q-0.1-2.5-2.2-3.8l-36.2-20.8q-1-0.6-2-0.6h-0.4q-1 0-2 0.6l-36.1 20.8a4 4 0 0 0-2.2 3.8v56q0 1.4 1.1 2t2.2 0L247 381a4 4 0 0 0 2.2-3.8V351q0-2.5 2.2-3.8l9.1-5.3a4 4 0 0 1 4.4 0l9.2 5.3q2 1.3 2.1 3.8v26.2q0.1 2.4 2.2 3.8l21.5 12.3q1.10.6 2.2 0 1-0.6 1.1-2zm174-77a2.2 2.2 0 0 0-3.2 1.8v55.6a1.5 1.5 0 0 1-2.3 1.3l-9-5.2q-2.2-1.2-4.4 0l-36.2 20.9a4 4 0 0 0-2.2 3.8v41.7q0.1 2.5 2.2 3.8l36.2 21q2.2 1 4.4 0l36.2-21a4 4 0 0 0 2.2-3.8V274.2q-0.1-2.5-2.3-3.8zM474 364.5q0 0.6-0.5 1l-12.4 7.1q-0.60.3-1.1 0l-12.5-7.1a1 1 0 0 1-0.5-1v-14.3q0-0.60.5-1L460 342q0.5-0.3 1 0l12.5 7.2q0.50.30.5 1zM598 350a4 4 0 0 0 2.1-3.8V336q0-2.5-2.2-3.8l-36-20.9c-1.3-0.8-3-0.8-4.3 0l-36.2 20.9a4 4 0 0 0-2.2 3.8v41.8q0 2.4 2.2 3.8l36 20.5c1.30.7 3 0.7 4.3 0l21.7-12.1a2.2 2.2 0 0 0 0-3.8l-36.4-21a2 2 0 0 1-1-1.8v-13.1q0-1.2 1-1.9l11.4-6.5q1-0.6 2.1 0l11.4 6.5q1 0.7 1 1.9v10.3a2.2 2.2 0 0 0 3.3 1.9z"}],["path",{"fill":"currentColor","d":"M559.1 348q0.5-0.30.9 0l7 4q0.30.10.30.7v8q0 0.5-0.40.7l-7 4q-0.30.3-0.8 0l-7-4-0.3-0.7v-8q0-0.50.4-0.8zm-199.7-36.5-36 20.7a4 4 0 0 0-2 3.8v41.5q0 2.5 2 3.7l36 20.8q2.2 1 4.3 0l36-20.8a4 4 0 0 0 2-3.7V336q0-2.4-2-3.8l-36-20.7a4 4 0 0 0-4.3 0"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevTsnode;
