import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-folder-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoFolderOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m870-189-50-50v-441H456l-60-60h-77l-60-60h162l60 60h339q23 0 41.5 18.5T880-680v460q0 8-2.5 16t-7.5 15Zm-8 161L730-160H140q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h34l60 60h-94v520h530L56-834l42-42L904-70l-42 42ZM410-480Zm160-10Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoFolderOff;
