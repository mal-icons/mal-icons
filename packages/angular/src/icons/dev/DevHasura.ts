import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-hasura",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevHasura {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-hasura-1-a)"}],["path",{"fill":"currentColor","d":"M158.7 213.7a3 3 0 0 1 4.8-0.4c9.9 11.4 13 42 8.2 58l-0.20.7a33 33 0 0 0-1.2 16.1l0.4 2.20.4 2.3c0.7 4.2 1.2 8.5 1.2 11.8 0 46-38.2 83.3-85.3 83.3a84.4 84.4 0 0 1-85.4-83.3c0-3.60.7-8.4 1.4-13l0.4-2.20.2-1q1.4-7.7-0.8-15.3l-0.3-0.9c-5.2-15.7-2-47.1 8-58.7a3 3 0 0 1 4.60.1l0.20.3 12.3 18.9a9.6 9.6 0 0 0 12.7 2 86 86 0 0 1 93.3 0c4 2.6 9.3 1.8 12.4-1.6l0.3-0.4zM87 240a67 67 0 0 0-28.3 6.2A65 65 0 0 0 21 304.6a65.4 65.4 0 0 0 66 64.5 65.4 65.4 0 0 0 66-68 65 65 0 0 0-37.7-54.8q-12.9-6.1-28.2-6.2m-4.4 36a2 2 0 0 1 1.50.7l0.10.2 14.5 23.8 16.9 28.6q0.5 1 0 1.9t-1.40.9h-14a2 2 0 0 1-1.5-0.7l-0.1-0.2-9-15.3-10 15.3q-0.60.8-1.40.9H63.9a2 2 0 0 1-1.6-1q-0.4-0.8 0-1.7v-0.2L81 301.6 67 279q-0.5-1 0-1.90.5-0.7 1.4-0.9h14.1"}],["path",{"fill":"currentColor","d":"M251 256.7h17.6V351H251v-40.2h-19.9V351h-17.6v-94.3h17.6v41h20zm72 94.3-3.7-19.6h-21.1l-3.4 19.6h-17.6l19.4-94.3h23.7l20.4 94.3zm-22.5-32.6h16.3l-8.4-45.1zm79.4 15.4v-20.2q0-2.4-0.9-3.2t-3.4-0.8h-12.4q-15.7 0-15.7-15v-23.1q0-14.8 16.5-14.8h16.8q16.5 0 16.5 14.8v13.2h-17.7v-10.8q0-2.4-1-3.2-0.8-0.9-3.3-0.9h-5.8q-2.7 0-3.50.9-1 0.8-1 3.2v19q0 2.4 1 3.2t3.50.8h12q16.1 0 16.1 14.7v24.6q0 14.9-16.6 14.8h-16.6q-16.7 0-16.7-14.8v-13h17.6v10.6q0 2.4 1 3.3t3.50.8h5.8q2.4 0 3.4-0.8t1-3.3m64.7-77.1h17.6v79.5q0 14.8-16.6 14.8H427q-16.7 0-16.7-14.8v-79.5h17.6v77.1q0 2.4 1 3.30.80.8 3.30.8h8.1q2.7 0 3.5-0.8 1-0.9 1-3.3zm49.8 57.6V351h-17.6v-94.3h35.5q16.7 0 16.7 14.8v28q0 12.2-11.2 14.3l16 37.2H515l-14.7-36.7zm0-44.5v31.7H507q2.4 0 3.4-0.8t0.9-3.2v-23.6q0-2.4-1-3.2-0.8-0.9-3.3-0.9zm87.9 81.2-3.7-19.6h-21.1L554 351h-17.6l19.4-94.3h23.7L600 351zm-22.5-32.6h16.4l-8.5-45.1z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevHasura;
