import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-thumbsup-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcThumbsup24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.35 2.38a0.750.75 0 0 1 0.81-0.36l0.130.03a3.88 3.88 0 0 1 2.88 4.97L16.53 9h1.14c2.65 0 4.51 2.59 3.68 5.1l-1.56 4.68A3.25 3.25 0 0 1 16.7 21h-5.29a4.5 4.5 0 0 1-2.83-1A1.75 1.75 0 0 1 7 21H4.75A1.75 1.75 0 0 1 3 19.25v-8.5C3 9.78 3.78 9 4.75 9h4.67a0.250.25 0 0 0 0.22-0.13l3.71-6.5ZM8.75 18.16l0.680.6a3 3 0 0 0 1.980.74h5.29a1.75 1.75 0 0 0 1.66-1.2l1.56-4.68a2.38 2.38 0 0 0-2.25-3.13H15.5a0.750.75 0 0 1-0.71-0.98l0.95-2.96a2.38 2.38 0 0 0-1.37-2.93l-3.42 5.99a1.75 1.75 0 0 1-1.520.88h-0.67v7.66Zm-1.5-7.66h-2.5a0.250.25 0 0 0-0.250.25v8.5c0 0.140.110.250.250.25H7a0.250.25 0 0 0 0.25-0.25V10.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcThumbsup24;
