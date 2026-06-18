import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-tasmota",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTasmota {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0L0 12l1.37 1.37L12 2.74l10.63 10.63L24 12 12 0zm0 8.46a7.41 7.41 0 0 0-2.64 14.33v-2.13a5.46 5.46 0 0 1 1.67-10.17V24h1.94V10.49a5.46 5.46 0 0 1 1.67 10.17v2.13A7.41 7.41 0 0 0 12 8.46z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTasmota;
