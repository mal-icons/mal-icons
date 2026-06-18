import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-selection-foreground",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhSelectionForeground {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M64,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16v-8a8,8,0,0,1,16,0v8h8A8,8,0,0,1,64,216Zm48-8H96a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16ZM40,168a8,8,0,0,0,8-8V144a8,8,0,0,0-16,0v16A8,8,0,0,0,40,168Zm128,24a8,8,0,0,0-8,8v8h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16v-8A8,8,0,0,0,168,192Zm0-80a8,8,0,0,0,8-8V96a16,16,0,0,0-16-16h-8a8,8,0,0,0,0,16h8v8A8,8,0,0,0,168,112ZM56,80H48A16,16,0,0,0,32,96v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16ZM208,32H96A16,16,0,0,0,80,48V88a4.44,4.44,0,0,0,0,0.55A8,8,0,0,0,88,96h24a8,8,0,0,0,0-16H96V48H208V160H176V144a8,8,0,0,0-16,0v24a8,8,0,0,0,8,8h40a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhSelectionForeground;
