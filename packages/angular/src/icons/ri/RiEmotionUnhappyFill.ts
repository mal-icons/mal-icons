import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-emotion-unhappy-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiEmotionUnhappyFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22ZM7 17H9C9 15.34 10.34 14 12 14C13.66 14 15 15.34 15 17H17C17 14.24 14.76 12 12 12C9.24 12 7 14.24 7 17ZM8 11C8.83 11 9.5 10.33 9.5 9.5C9.5 8.67 8.83 8 8 8C7.17 8 6.5 8.67 6.5 9.5C6.5 10.33 7.17 11 8 11ZM16 11C16.83 11 17.5 10.33 17.5 9.5C17.5 8.67 16.83 8 16 8C15.17 8 14.5 8.67 14.5 9.5C14.5 10.33 15.17 11 16 11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiEmotionUnhappyFill;
