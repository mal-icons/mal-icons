import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-camera-rear",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtCameraRear {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 16h10V2H7v14zm4.99-13c1.1 0 2 0.9 2 2C14 6.1 13.1 7 12 7c-1.11 0-2-0.9-2-2s0.89-2 1.99-2z","opacity":".3"}],["path",{"d":"M5 20v2h5v2l3-3-3-3v2zm9 0h5v2h-5zm5-18c0-1.1-0.9-2-2-2H7C5.9 0 5 0.9 5 2v14c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2V2zm-2 14H7V2h10v14zm-5-9c1.1 0 2-0.9 1.99-2 0-1.1-0.9-2-2-2S10 3.9 10 5s0.89 2 2 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtCameraRear;
