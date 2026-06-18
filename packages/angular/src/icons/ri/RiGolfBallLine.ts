import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-golf-ball-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiGolfBallLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM14 7C14 7.55 13.55 8 13 8C12.45 8 12 7.55 12 7C12 6.45 12.45 6 13 6C13.55 6 14 6.45 14 7ZM13 11C13.55 11 14 10.55 14 10C14 9.45 13.55 9 13 9C12.45 9 12 9.45 12 10C12 10.55 12.45 11 13 11ZM17 12C17 12.55 16.55 13 16 13C15.45 13 15 12.55 15 12C15 11.45 15.45 11 16 11C16.55 11 17 11.45 17 12ZM16 10C16.55 10 17 9.55 17 9C17 8.45 16.55 8 16 8C15.45 8 15 8.45 15 9C15 9.55 15.45 10 16 10Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiGolfBallLine;
