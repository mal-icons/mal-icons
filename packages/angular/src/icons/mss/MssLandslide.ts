import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-landslide",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssLandslide {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-80h800L640-400l-200-80-120-160H80v560Zm60-60v-101l100 32 375-124 145 193H140Zm100-131-100-34v-96l100 32 173-56 122 55-295 99Zm500-129 180-80v-160l-180-40-100 80v120l100 80Zm-500-31-100-34v-115h150l82 105-132 44Zm508-27-58-45v-73l63-50 117 26v87l-122 55ZM480-640l200-80v-200l-200-40-120 80v160l120 80Zm5-56-75-51v-106l81-54 139 28v125l-145 58Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssLandslide;
