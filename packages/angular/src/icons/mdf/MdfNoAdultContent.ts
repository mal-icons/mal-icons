import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-no-adult-content",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfNoAdultContent {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-1.850.63-3.54 1.69-4.9L7.59 9h2.83L7.1 5.69A7.92 7.92 0 0 1 12 4c4.41 0 8 3.59 8 8 0 1.85-0.63 3.54-1.69 4.9l-1.9-1.9h-2.83l3.31 3.31A7.87 7.87 0 0 1 12 20c-4.41 0-8-3.59-8-8z"}],["path",{"d":"m14.25 14-1.5-2 1.5-2h-1.5L12 11l-0.75-1h-1.5l1.5 2-1.5 2h1.5l0.75-1 0.75 1zM8 10l-0.75 1-0.75-1H5l1.5 2L5 14h1.5l0.75-1L8 14h1.5L8 12l1.5-2zm8 4 0.75-1 0.75 1H19l-1.5-2 1.5-2h-1.5l-0.75 1-0.75-1h-1.5l1.5 2-1.5 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfNoAdultContent;
