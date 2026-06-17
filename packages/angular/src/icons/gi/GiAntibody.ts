import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-antibody",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAntibody {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M95.81 29.78a18 18 0 0 0-12.54 30.91l81.64 81.64-14.54 14.54-73.64-73.64a18 18 0 0 0-12.92-5.45 18 18 0 0 0-12.54 30.91l96 96a18 18 0 1 0 25.46-25.46l-9.64-9.64 14.54-14.54L206 183.42v280.55a18 18 0 1 0 36 0v-199h28v199a18 18 0 1 0 36 0V183.42l28.37-28.36 14.54 14.54-9.64 9.64a18 18 0 1 0 25.46 25.46l96-96a18 18 0 0 0-13.08-30.9 18 18 0 0 0-12.37 5.45l-73.64 73.64-14.54-14.54 81.64-81.64a18 18 0 0 0-13.08-30.9 18 18 0 0 0-12.37 5.45L270 168.51v78.46h-28v-78.45L108.73 35.23a18 18 0 0 0-12.92-5.45z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAntibody;
