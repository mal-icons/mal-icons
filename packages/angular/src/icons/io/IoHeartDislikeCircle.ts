import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-heart-dislike-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoHeartDislikeCircle {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm23.3,299.19c-4.41,3.2-9.16,6.55-14.31,10a15.93,15.93,0,0,1-18,0c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5,0-0.21,0-0.43,0-0.64a4,4,0,0,1,6.82-2.72L279.76,341.12A4,4,0,0,1,279.3,347.19Zm68,16.12a16,16,0,0,1-22.62,0l-176-176a16,16,0,0,1,22.62-22.62l176,176A16,16,0,0,1,347.31,363.31ZM333.2,297.69a3.92,3.92,0,0,1-6,0.37l-124-123.21A4,4,0,0,1,206,168l1.55,0c20.4,0,35,10.64,44.11,20.42a5.93,5.93,0,0,0,8.7,0c9.11-9.78,23.71-20.42,44.11-20.42,30.31,0,55.22,25.27,55.53,56.33C360.26,250.26,351.48,274.3,333.2,297.69Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoHeartDislikeCircle;
