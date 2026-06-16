import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-queue-music",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssQueueMusic {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M640.12-160Q591-160 556-193.56q-35-33.56-35-81.5t33.54-81.44Q588.08-390 636-390q16 0 31.5 3t30.5 10v-343h182v71H758v375q0 47.5-34.38 80.75-34.38 33.25-83.5 33.25ZM120-330v-60h306v60H120Zm0-165v-60h473v60H120Zm0-165v-60h473v60H120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssQueueMusic;
