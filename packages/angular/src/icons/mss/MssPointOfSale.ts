import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-point-of-sale",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPointOfSale {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M200-630v-250h560v250H200Zm60-60h440v-130H260v130ZM80-80v-130h800v130H80Zm0-160 160-360h480l160 360H80Zm240-80h80v-40h-80v40Zm0-80h80v-40h-80v40Zm0-80h80v-40h-80v40Zm120 160h80v-40h-80v40Zm0-80h80v-40h-80v40Zm0-80h80v-40h-80v40Zm120 160h80v-40h-80v40Zm0-80h80v-40h-80v40Zm0-80h80v-40h-80v40Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPointOfSale;
