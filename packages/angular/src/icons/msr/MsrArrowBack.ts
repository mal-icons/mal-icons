import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-arrow-back",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrArrowBack {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M447-181 169-459q-5-5-7-10t-2-11q0-6 2-11t7-10l279-279q8-8 20-8t21 9q9 9 9 21t-9 21L262-510h496q13 0 21.5 8.5T788-480q0 13-8.5 21.5T758-450H262l228 228q8 8 8 20t-9 21q-9 9-21 9t-21-9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrArrowBack;
