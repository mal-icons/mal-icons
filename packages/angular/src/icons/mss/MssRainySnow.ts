import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-rainy-snow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssRainySnow {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m307-199-87-175 53-26 87 173-53 28Zm360 0L460-614l53-26 207 413-53 28Zm-157.18-11Q497-210 488.5-218.67q-8.5-8.68-8.5-21.5 0-12.82 8.68-21.32 8.68-8.5 21.5-8.5 12.83 0 21.33 8.68 8.5 8.68 8.5 21.5 0 12.83-8.68 21.33-8.68 8.5-21.5 8.5ZM867-200l-47-94 53-26 47 93-53 27ZM427-320 220-733l53-27 207 413-53 27Zm372.83-50Q787-370 778.5-378.67q-8.5-8.68-8.5-21.5 0-12.82 8.68-21.32 8.68-8.5 21.5-8.5 12.83 0 21.33 8.68 8.5 8.68 8.5 21.5 0 12.83-8.68 21.33-8.68 8.5-21.5 8.5Zm-600-80Q187-450 178.5-458.67q-8.5-8.68-8.5-21.5 0-12.82 8.68-21.32 8.68-8.5 21.5-8.5 12.83 0 21.33 8.68 8.5 8.68 8.5 21.5 0 12.83-8.68 21.33-8.68 8.5-21.5 8.5ZM727-480 600-734l53-26 127 253-53 27Zm-600-80L40-733l53-27 87 173-53 27Zm322.83-130Q437-690 428.5-698.67q-8.5-8.68-8.5-21.5 0-12.82 8.68-21.32 8.68-8.5 21.5-8.5 12.83 0 21.33 8.68 8.5 8.68 8.5 21.5 0 12.83-8.68 21.33-8.68 8.5-21.5 8.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssRainySnow;
