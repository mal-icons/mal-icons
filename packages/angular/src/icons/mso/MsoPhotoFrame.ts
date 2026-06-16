import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-photo-frame",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoPhotoFrame {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M190-120q-12.75 0-21.37-8.62T160-150v-50h-60q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h760q24 0 42 18t18 42v480q0 24-18 42t-42 18h-60v50q0 12.75-8.62 21.38T770-120H190Zm-90-140h760v-480H100v480Zm120-110h520L580-584 440-404 340-524 220-370ZM100-260v-480 480Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoPhotoFrame;
