import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-photo-camera",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPhotoCamera {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M479.5-266q72.5 0 121.5-49t49-121.5q0-72.5-49-121T479.5-606q-72.5 0-121 48.5t-48.5 121q0 72.5 48.5 121.5t121 49ZM80-120v-633h207l73-87h240l73 87h207v633H80Zm60-60h680v-513H140v513Zm340-256Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPhotoCamera;
