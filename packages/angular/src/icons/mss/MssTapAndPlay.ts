import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-tap-and-play",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssTapAndPlay {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M655-40v-60h45v-670H260v275h-60v-425h560v880H655Zm-455 0v-155q65 0 110 45t45 110H200Zm215 0q0-90-62.5-152.5T200-255v-60q114.58 0 194.79 80.21Q475-154.58 475-40h-60Zm120 0q0-140-97.36-237.5Q340.28-375 200-375v-60q82 0 154.08 31.11 72.08 31.11 125.4 84.43 53.32 53.33 84.42 125.41Q595-121.96 595-40h-60ZM260-830h440v-30H260v30Zm0 0v-30 30Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssTapAndPlay;
