import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-border-color",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBorderColor {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140 0q-24.75 0-42.37-17.89T80-60.88Q80-86 97.92-103.5 115.84-121 141-121h679q24.75 0 42.38 17.68T880-60.82Q880-36 862.08-18T819 0H140Zm52-227q-12.75 0-21.37-8.62T162-257v-91q0-5.56 2-10.78Q166-364 171-369l364-364 133 133-364 364q-5 5-10.22 7-5.22 2-10.78 2h-91Zm30-60h45l315-315-45-45-315 315v45Zm490-357L579-777l84-84q11-13 25-13.5t28 13.5l78 78q13 13 13 27.5T796-728l-84 84ZM222-287Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBorderColor;
