import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-real-estate-agent",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfRealEstateAgent {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 22h4V11H1v11zm19-5h-7l-2.09-0.730.33-0.94L13 16h2.82c0.65 0 1.18-0.53 1.18-1.18 0-0.49-0.31-0.93-0.77-1.11L8.97 11H7v9.02L14 22l8-3c-0.01-1.1-0.89-2-2-2zM14 1.5l-7 5V9h2l8.14 3.26C18.26 12.71 19 13.79 19 15h2V6.5l-7-5zm-0.5 8.5h-1V9h1v1zm0-2h-1V7h1v1zm2 2h-1V9h1v1zm0-2h-1V7h1v1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfRealEstateAgent;
