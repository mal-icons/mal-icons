import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-modelscope",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiModelscope {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.67 5.33V8H0v5.33h2.67v-2.67H0.5V8.5h2.17v2.17h2.67V8H8V5.33Zm0 8v5.33H8V16H5.33v-2.67Zm13.33-8V8h2.67v2.67h2.67V8.5H23.5v2.17h-2.17v2.67H24V8h-2.67V5.33Zm5.33 8h-2.67V16H16v2.67h5.33zM8 10.67v2.67h2.67v-2.67zm2.67 2.67V16h2.67v-2.67zm2.67 0H16v-2.67h-2.67z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiModelscope;
