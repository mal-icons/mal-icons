import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-google-pay",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrGooglePay {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#a)"}],["path",{"fill":"currentColor","d":"m12.65 14.34 5.94-10.28 3.23 1.87a4.37 4.37 0 0 1 1.6 5.96l-3.34 5.79a2.73 2.73 0 0 1-3.73 1l-3-1.73a1.91 1.91 0 0 1-0.69-2.61Z"}],["path",{"fill":"currentColor","d":"M12.01 7.2 4.63 19.99l3.24 1.87a4.37 4.37 0 0 0 5.96-1.6l4.79-8.3a2.73 2.73 0 0 0-1-3.73l-3-1.73a1.9 1.9 0 0 0-2.60.7Z"}],["path",{"fill":"currentColor","d":"m18.58 4.05-2.29-1.32A5.46 5.46 0 0 0 8.84 4.73l-4.25 7.35a2.73 2.73 0 0 0 1 3.73l2.29 1.32a2.73 2.73 0 0 0 3.73-1l5.07-8.78a3.81 3.81 0 0 1 5.21-1.39l-3.3-1.9Z"}],["path",{"fill":"currentColor","d":"M9.5 6.89 6.97 5.43a2.36 2.36 0 0 0-3.210.86L0.73 11.52a5.38 5.38 0 0 0 1.98 7.36l1.92 1.11 2.33 1.34 1.010.58a4.14 4.14 0 0 1-1.27-5.51l0.79-1.35 2.87-4.96a2.34 2.34 0 0 0-0.86-3.21Z"}],["path",{"fill":"currentColor","d":"M0 0h24v24H0z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrGooglePay;
