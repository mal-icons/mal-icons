import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-volume-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtVolumeDown {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 13h2.83L12 15.17V8.83L9.83 11H7z","opacity":".3"}],["path",{"d":"M16 7.97v8.05c1.48-0.73 2.5-2.25 2.5-4.02A4.5 4.5 0 0 0 16 7.97zM5 9v6h4l5 5V4L9 9H5zm7-0.17v6.34L9.83 13H7v-2h2.83L12 8.83z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtVolumeDown;
