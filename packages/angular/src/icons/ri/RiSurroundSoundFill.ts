import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-surround-sound-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSurroundSoundFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3H21C21.55 3 22 3.45 22 4V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3ZM7.05 7.12C5.78 8.39 5 10.14 5 12.07C5 14 5.78 15.75 7.05 17.02L8.46 15.61C7.56 14.7 7 13.45 7 12.07C7 10.69 7.56 9.44 8.46 8.54L7.05 7.12ZM16.95 7.12L15.54 8.54C16.44 9.44 17 10.69 17 12.07C17 13.45 16.44 14.7 15.54 15.61L16.95 17.02C18.22 15.75 19 14 19 12.07C19 10.14 18.22 8.39 16.95 7.12ZM12 15.07C13.66 15.07 15 13.73 15 12.07C15 10.41 13.66 9.07 12 9.07C10.34 9.07 9 10.41 9 12.07C9 13.73 10.34 15.07 12 15.07ZM12 13.07C11.45 13.07 11 12.62 11 12.07C11 11.52 11.45 11.07 12 11.07C12.55 11.07 13 11.52 13 12.07C13 12.62 12.55 13.07 12 13.07Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSurroundSoundFill;
