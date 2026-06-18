import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-emotion-happy-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiEmotionHappyLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM7 13H9C9 14.66 10.34 16 12 16C13.66 16 15 14.66 15 13H17C17 15.76 14.76 18 12 18C9.24 18 7 15.76 7 13ZM8 11C7.17 11 6.5 10.33 6.5 9.5C6.5 8.67 7.17 8 8 8C8.83 8 9.5 8.67 9.5 9.5C9.5 10.33 8.83 11 8 11ZM16 11C15.17 11 14.5 10.33 14.5 9.5C14.5 8.67 15.17 8 16 8C16.83 8 17.5 8.67 17.5 9.5C17.5 10.33 16.83 11 16 11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiEmotionHappyLine;
