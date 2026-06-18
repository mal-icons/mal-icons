import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-langchaincorporate",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLangchaincorporate {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.53 15.98a7.53 7.53 0 0 0 2.21-5.32A7.54 7.54 0 0 0 7.53 5.33L2.21 0A7.54 7.54 0 0 0 0 5.33a7.54 7.54 0 0 0 2.21 5.33zm11.140.49a7.54 7.54 0 0 0-5.32-2.21 7.54 7.54 0 0 0-5.32 2.21l5.33 5.33a7.54 7.54 0 0 0 5.33 2.21A7.54 7.54 0 0 0 24 21.79zM2.22 21.78a7.54 7.54 0 0 0 5.33 2.21v-7.53H0.01a7.54 7.54 0 0 0 2.21 5.33M20.73 8.6a7.53 7.53 0 0 0-5.33-2.21 7.53 7.53 0 0 0-5.32 2.21l5.33 5.33z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLangchaincorporate;
