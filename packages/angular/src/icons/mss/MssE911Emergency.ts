import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-e911-emergency",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssE911Emergency {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M210-160v-60h61l84-277q6-19 21.5-31t35.5-12h136q20 0 35.5 12t21.5 31l84 277h61v60H210Zm125-60h290l-78-260H413l-78 260Zm115-440v-180h60v180h-60Zm235 98-43-43 128-127 42 42-127 128Zm55 192v-60h180v60H740ZM275-562 148-690l42-42 128 127-43 43ZM40-370v-60h180v60H40Zm440 150Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssE911Emergency;
