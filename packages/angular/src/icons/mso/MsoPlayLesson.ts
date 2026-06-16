import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-play-lesson",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoPlayLesson {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M493-139q3 14 11.5 31T522-79H180q-24 0-42-18t-18-42v-681q0-24 18-42t42-18h520q24 0 42 18t18 42v339q-13.5-2-30-2t-30 2v-339H462v278l-96-59-96 59v-278h-90v681h313Zm235 99q-81 0-136.5-55.5T536-232q0-81 55.5-136.5T728-424q81 0 136.5 55.5T920-232q0 81-55.5 136.5T728-40Zm-49-100 143-92-143-92v184ZM270-820h192-192Zm223 0H180h520-223 16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoPlayLesson;
