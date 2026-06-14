import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-socketio",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevSocketio {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-socketio-1-a)"}],["path",{"fill":"currentColor","d":"M224 9.8c77.7-20 163.5-8.3 232 34a301 301 0 0 1 143.9 249.4 301 301 0 0 1-134.7 257.1c-94.5 63.6-225.3 66-321.8 5.6A301 301 0 0 1 2.3 265C14.2 144.8 107 38.8 224 9.8"}],["path",{"fill":"currentColor","d":"M212.1 58.9C358.80.2 538.7 108.6 554 265.9c23.6 141.5-93.8 285.3-237.2 289.4-136.4 13.7-268.1-102-272-238.9C34.5 205.6 107.6 95.6 212 59"}],["path",{"fill":"currentColor","d":"M226.9 284.8c65.7-53.7 130-109.3 197.2-161.4C389 177.5 352.6 230.9 317.4 285q-45.30.2-90.5-0.3m55.6 30q45.4-0.1 90.80.4C307 368.6 243 424.6 175.8 476.6c35.2-54.2 71.4-107.7 106.7-161.9"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevSocketio;
