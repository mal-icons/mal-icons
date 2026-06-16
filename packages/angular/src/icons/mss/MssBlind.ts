import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-blind",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssBlind {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m240-60-48-36 104-139-8-191q-2-51 5.5-109T317-637l-97 56v111h-60v-146l167-96q17-10 33-15t31-5q24 0 42.5 11.5T461-687l26 59q19 43 73 70.5T680-530v60h-46L863-75l-26 15-242-418q-42-10-86.5-40.5T441-585q-12 34-18.5 73.5T418-440l97 137v243h-60v-219l-85-95-10 154L240-60Zm218-714q-30 0-51.5-21.5T385-847q0-30 21.5-51.5T458-920q30 0 51.5 21.5T531-847q0 30-21.5 51.5T458-774Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssBlind;
