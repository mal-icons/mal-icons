import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-lightbulb-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtLightbulbCircle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 15c-0.83 0-1.5-0.67-1.5-1.5h3c0 0.83-0.67 1.5-1.5 1.5zm3-2.5H9V15h6v1.5zm-0.03-2.5H9.03A4.97 4.97 0 0 1 7 10c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.64-0.8 3.09-2.03 4z","opacity":".3"}],["path",{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}],["path",{"d":"M12 19c0.83 0 1.5-0.67 1.5-1.5h-3c0 0.830.67 1.5 1.5 1.5zm-3-4h6v1.5H9zm3-10c-2.76 0-5 2.24-5 5 0 1.640.8 3.09 2.03 4h5.95A4.99 4.99 0 0 0 17 10c0-2.76-2.24-5-5-5zm2.43 7.5H9.57A3.47 3.47 0 0 1 8.5 10c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 0.95-0.39 1.84-1.07 2.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtLightbulbCircle;
