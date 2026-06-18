import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-music-ai-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMusicAiFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.71 8.13L18.47 8.69C18.29 9.11 17.71 9.11 17.53 8.69L17.29 8.13C16.85 7.12 16.06 6.32 15.07 5.88L14.31 5.54C13.9 5.36 13.9 4.76 14.31 4.58L15.03 4.26C16.04 3.81 16.84 2.97 17.28 1.93L17.53 1.32C17.71 0.89 18.29 0.89 18.47 1.32L18.72 1.93C19.16 2.97 19.96 3.81 20.97 4.26L21.69 4.58C22.1 4.76 22.1 5.36 21.69 5.54L20.93 5.88C19.94 6.32 19.15 7.12 18.71 8.13ZM7 3H12V6H9V17C9 19.21 7.21 21 5 21C2.79 21 1 19.21 1 17C1 14.79 2.79 13 5 13C5.73 13 6.41 13.19 7 13.54V3ZM18 13.54V11H20V17C20 19.21 18.21 21 16 21C13.79 21 12 19.21 12 17C12 14.79 13.79 13 16 13C16.73 13 17.41 13.19 18 13.54Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMusicAiFill;
