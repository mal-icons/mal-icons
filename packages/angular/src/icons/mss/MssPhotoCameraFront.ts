import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-photo-camera-front",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPhotoCameraFront {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M320-286h320v-19q0-42-42.5-65T480-393q-75 0-117.5 23T320-305v19Zm159.92-174q30.08 0 51.58-21.42 21.5-21.42 21.5-51.5 0-30.08-21.42-51.58-21.42-21.5-51.5-21.5-30.08 0-51.58 21.42-21.5 21.42-21.5 51.5 0 30.08 21.42 51.58 21.42 21.5 51.5 21.5ZM80-120v-633h207l73-87h240l73 87h207v633H80Zm60-60h680v-513H140v513Zm340-257Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPhotoCameraFront;
