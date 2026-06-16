import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-hls-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtHlsOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.83 15h1.67c0.55 0 1-0.45 1-1v-1.5c0-0.55-0.45-1-1-1H17v-1h2v0.5h1.5v-1c0-0.55-0.45-1-1-1h-3c-0.55 0-1 0.45-1 1v1.5c0 0.550.45 1 1 1H19v1h-2V13h-1.17l2 2zM8 10.83V15H6.5v-2.5h-2V15H3V9h1.5v2h2V9.33L1.39 4.22 2.8 2.81l18.38 18.38-1.41 1.41-7.6-7.6H10v-2.17l-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtHlsOff;
