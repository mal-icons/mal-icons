import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-camera-switch-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCameraSwitchFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 3H15L17 5H21C21.55 5 22 5.45 22 6V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V6C2 5.45 2.45 5 3 5H7L9 3ZM14.68 18.37L13.79 16.58C13.25 16.85 12.64 17 12 17C9.79 17 8 15.21 8 13H10L7.84 8.68C6.71 9.77 6 11.3 6 13C6 16.31 8.69 19 12 19C12.96 19 13.88 18.77 14.68 18.37ZM9.32 7.63L10.21 9.42C10.75 9.15 11.36 9 12 9C14.21 9 16 10.79 16 13H14L16.16 17.32C17.29 16.23 18 14.7 18 13C18 9.69 15.31 7 12 7C11.04 7 10.12 7.23 9.32 7.63Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCameraSwitchFill;
