import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-oil-barrel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssOilBarrel {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-120v-60h80v-270h-80v-60h80v-270h-80v-60h720v60h-80v270h80v60h-80v270h80v60H120Zm140-60h440v-270h-30v-60h30v-270H260v270h30v60h-30v270Zm220.12-153Q526-333 558-364.64q32-31.64 32-76.59 0-35.77-20.62-61.42Q548.75-528.3 480-608q-68.75 78.93-89.37 105.08Q370-476.76 370-440.97q0 44.97 32.12 76.47 32.12 31.5 78 31.5ZM260-180v-600 600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssOilBarrel;
