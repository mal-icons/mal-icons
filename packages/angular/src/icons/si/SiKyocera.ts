import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-kyocera",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiKyocera {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.68 4.64L2.32 12V4.64h7.35zm-7.35 14.71h7.36L2.32 12v7.36zm7.35 0L17.03 12 9.68 4.64v14.71zM21.68 0h-7.35L9.68 4.64h7.36V12l4.64-4.64V0zm-12 19.36L14.32 24h7.36v-7.35L17.03 12v7.36H9.68z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiKyocera;
