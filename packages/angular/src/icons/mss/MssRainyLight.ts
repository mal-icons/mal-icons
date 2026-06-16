import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-rainy-light",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssRainyLight {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M167-479 40-734l54-26 126 254-53 27Zm140 280L200-413l53-28 107 214-53 28Zm81-200L221-734l54-26 167 334-54 27Zm87-200-66-134 53-27 66 133-53 28Zm24 399-67-133 53-27 67 133-53 27Zm186 0L518-533l53-28 167 334-53 27Zm62-239L600-733l53-27 147 294-53 27Zm120 240-87-174 53-27 87 174-53 27Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssRainyLight;
