import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-music-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMusicLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 13.54V3H20V5H14V17C14 19.21 12.21 21 10 21C7.79 21 6 19.21 6 17C6 14.79 7.79 13 10 13C10.73 13 11.41 13.19 12 13.54ZM10 19C11.1 19 12 18.1 12 17C12 15.9 11.1 15 10 15C8.9 15 8 15.9 8 17C8 18.1 8.9 19 10 19Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMusicLine;
