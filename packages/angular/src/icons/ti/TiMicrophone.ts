import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-microphone",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiMicrophone {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 16c2.21 0 4-1.79 4-4v-6c0-2.21-1.79-4-4-4s-4 1.79-4 4v6c0 2.21 1.79 4 4 4zM19 12v-2c0-0.55-0.45-1-1-1s-1 0.45-1 1v2c0 2.76-2.24 5-5 5s-5-2.24-5-5v-2c0-0.55-0.45-1-1-1s-1 0.45-1 1v2c0 3.52 2.61 6.43 6 6.92v1.08h-3c-0.55 0-1 0.45-1 1s0.45 1 1 1h8c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3v-1.08c3.39-0.49 6-3.4 6-6.92z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiMicrophone;
