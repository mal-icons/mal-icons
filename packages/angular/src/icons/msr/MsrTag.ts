import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-tag",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrTag {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M287-160q-14 0-23-11t-5-25l34-134H178q-14 0-23.5-11.5T149-367q2-10 10-16.5t19-6.5h130l45-180H218q-14 0-23.5-11.5T189-607q2-10 10-16.5t19-6.5h150l37-148q2-10 9.5-16t17.5-6q14 0 22.5 11t5.5 25l-33 134h181l37-148q2-10 9.5-16t17.5-6q14 0 22.5 11t5.5 25l-33 134h115q14 0 23.5 11.5T811-593q-2 10-10 16.5t-19 6.5H652l-45 180h135q14 0 23.5 11.5T771-353q-2 10-10 16.5t-19 6.5H592l-37 148q-2 8-8.5 15t-19.5 7q-14 0-23-11t-5-25l34-134H352l-37 148q-2 8-8.5 15t-19.5 7Zm80-230h181l45-180H412l-45 180Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrTag;
