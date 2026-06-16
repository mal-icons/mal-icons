import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-emoji-objects",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoEmojiObjects {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-80q-27 0-47.5-13T406-129h-14q-24 0-42-18t-18-42v-143q-66-43-104-110t-38-148q0-121 84.5-205.5T480-880q121 0 205.5 84.5T770-590q0 81-38 148T628-332v143q0 24-18 42t-42 18h-14q-6 23-26.5 36T480-80Zm-88-109h176v-44H392v44Zm0-84h176v-40H392v40Zm-9-100h74v-137l-92-92 31-31 84 84 84-84 31 31-92 92v137h74q60-28 96.5-87T710-590q0-97-66.5-163.5T480-820q-97 0-163.5 66.5T250-590q0 71 36.5 130t96.5 87Zm97-176Zm0-48Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoEmojiObjects;
