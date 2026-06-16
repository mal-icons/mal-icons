import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-unknown-med",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoUnknownMed {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M130-450q-20.83 0-35.42-14.62Q80-479.23 80-500.12 80-521 94.58-535.5 109.17-550 130-550h260q20.83 0 35.42 14.62Q440-520.76 440-499.88 440-479 425.42-464.5 410.83-450 390-450H130Zm440 0q-20.83 0-35.42-14.62Q520-479.23 520-500.12 520-521 534.58-535.5 549.17-550 570-550h260q20.83 0 35.42 14.62Q880-520.76 880-499.88 880-479 865.42-464.5 850.83-450 830-450H570Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoUnknownMed;
